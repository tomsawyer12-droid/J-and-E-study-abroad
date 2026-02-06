import { useState } from 'react';
import { Check, ChevronRight, Globe, GraduationCap, BookOpen, FileText, Wallet, Languages, Plane, User } from 'lucide-react';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Input } from './ui/input';

import { Textarea } from './ui/textarea';
import { Label } from './ui/label';


type FormData = {
  destination: string;
  level: string;
  interest: string;
  education: string;
  funding: string;
  english: string;
  timeline: string;
  passport: string;
  name: string;
  email: string;
  phone: string;
};

const STEPS = [
  { title: 'Study Destination', subtitle: 'Where would you like to study?' },
  { title: 'Study Level', subtitle: 'What level do you want to study?' },
  { title: 'Course Interest', subtitle: 'What would you like to study?' },
  { title: 'Education Background', subtitle: 'What is your highest level of education?' },
  { title: 'Budget & Funding', subtitle: 'Will you need financial support?' },
  { title: 'English Proficiency', subtitle: 'Have you taken an English test?' },
  { title: 'Travel Readiness', subtitle: 'When would you like to start?' },
  { title: 'Contact Details', subtitle: 'Almost done!' },
];

export function MultiStepContactForm() {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    destination: '', level: '', interest: '', education: '', funding: '', 
    english: '', timeline: '', passport: '', name: '', email: '', phone: '',
  });

  const totalSteps = STEPS.length;
  const progress = (step / totalSteps) * 100;

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateStep = () => {
    switch (step) {
      case 1: return !!formData.destination;
      case 2: return !!formData.level;
      case 3: return !!formData.interest;
      case 4: return !!formData.education;
      case 5: return !!formData.funding;
      case 6: return !!formData.english;
      case 7: return !!formData.timeline && !!formData.passport;
      case 8: return !!formData.name && !!formData.email && !!formData.phone;
      default: return true;
    }
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else setIsCompleted(true);
  };

  const updateData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const CircleOption = ({ label, value, field, selected }: { label: string, value: string, field: keyof FormData, selected: boolean }) => (
    <div 
      onClick={() => updateData(field, value)}
      className="flex items-center gap-4 cursor-pointer group"
    >
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
        selected ? 'border-[#2D5A61] bg-white' : 'border-gray-200 group-hover:border-[#2D5A61]/50'
      }`}>
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#2D5A61]" />}
      </div>
      <span className={`text-lg transition-colors ${selected ? 'text-gray-900 font-medium' : 'text-gray-500 group-hover:text-gray-700'}`}>
        {label}
      </span>
    </div>
  );

  if (isCompleted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-16 h-16 bg-[#2D5A61]/10 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-[#2D5A61]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Success!</h2>
        <p className="text-lg text-gray-600 max-w-sm">
          "Great! Our study abroad advisor will reach out soon to help you plan your journey."
        </p>
        <Button 
          variant="link"
          onClick={() => { setStep(1); setIsCompleted(false); }}
          className="text-[#2D5A61] font-bold hover:underline"
        >
          Start New Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col animate-in fade-in duration-700">
      {/* Step Indicator */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-400 tracking-wider">
            {STEPS[step-1].title} — Step {step} of {totalSteps}
          </span>
          <div className="relative h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-[#2D5A61] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 space-y-12 mb-12">
        <div className="space-y-6">

          <div className="space-y-3">
             <h3 className="text-2xl font-bold text-gray-900">
              {step === 1 ? 'Your Global Journey starts here' : 
               step === 2 ? 'Let’s find the right academic path' :
               step === 3 ? 'Tell us what excites you academically' :
               step === 4 ? 'Help us understand your qualifications' :
               step === 5 ? 'Let’s see what support you might need' :
               step === 6 ? 'Proof of English skills' :
               step === 7 ? 'Let’s plan your timeline' :
               'Almost done! Let’s stay in touch'}
             </h3>
             <p className="text-gray-500 leading-relaxed max-w-md">
              {step === 1 ? 'But first, we’d like to get to know you a bit better. Answer the following quick questions.' :
              'Please provide the information below to help us tailor our guidance for you.'}
             </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-xl font-bold text-[#2D5A61]">{STEPS[step-1].subtitle}</p>
          
          <div className="space-y-5">
            {step === 1 && (
              <div className="space-y-4">
                {['United Kingdom', 'Canada', 'USA', 'Australia', 'Europe', 'Not sure yet (Help me choose)'].map(opt => (
                  <CircleOption key={opt} label={opt} value={opt} field="destination" selected={formData.destination === opt} />
                ))}
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                {['Diploma', "Bachelor’s Degree", "Master’s Degree", 'PhD', 'Short Course', "I’m not sure yet"].map(opt => (
                  <CircleOption key={opt} label={opt} value={opt} field="level" selected={formData.level === opt} />
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="max-w-md space-y-4">
                  <Textarea 
                    placeholder="Type your course interest here..." 
                    className="min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.interest}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateData('interest', e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleNext())}
                  />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                {['High School', 'Diploma', "Bachelor’s Degree", "Master’s Degree"].map(opt => (
                  <CircleOption key={opt} label={opt} value={opt} field="education" selected={formData.education === opt} />
                ))}
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                {['Yes', 'No', "Maybe — I’d like advice"].map(opt => (
                  <CircleOption key={opt} label={opt} value={opt} field="funding" selected={formData.funding === opt} />
                ))}
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                {['IELTS', 'TOEFL', 'Duolingo', 'Not yet'].map(opt => (
                  <CircleOption key={opt} label={opt} value={opt} field="english" selected={formData.english === opt} />
                ))}
              </div>
            )}

            {step === 7 && (
              <div className="space-y-8">
                <div className="space-y-4">
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Start Date</p>
                   {['This year', 'Next year', 'Just exploring options'].map(opt => (
                     <CircleOption key={opt} label={opt} value={opt} field="timeline" selected={formData.timeline === opt} />
                   ))}
                </div>
                <div className="space-y-4 border-t border-gray-100 pt-8">
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Passport Status</p>
                   {['Yes', 'No', 'Applied already'].map(opt => (
                     <CircleOption key={opt} label={opt} value={opt} field="passport" selected={formData.passport === opt} />
                   ))}
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="max-w-md space-y-8">
                <div className="space-y-8">
                  <Input 
                    placeholder="Your Full Name" 
                    className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.name}
                    onChange={(e) => updateData('name', e.target.value)}
                  />
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.email}
                    onChange={(e) => updateData('email', e.target.value)}
                  />
                  <Input 
                    placeholder="Phone / WhatsApp Number" 
                    className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.phone}
                    onChange={(e) => updateData('phone', e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-auto flex gap-4">
        {step > 1 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={handleBack}
            className="text-muted-foreground hover:text-foreground"
          >
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          disabled={!validateStep()}
          size="sm"
          className="bg-[#2D5A61] hover:bg-[#1E3C40] text-black shadow-sm ml-auto disabled:bg-zinc-200 disabled:text-zinc-500 disabled:opacity-100 disabled:cursor-not-allowed"
        >
          {step === totalSteps ? 'Complete inquiry' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
