import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Loader2 } from "lucide-react";
import Button from "../components/Button";
import { cn } from "../lib/utils";

const formSchema = z.object({
  // Step 1: Contact Info
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  
  // Step 2: Project Info
  manuscriptStatus: z.enum(["complete", "in-progress", "not-started"]),
  genre: z.string().min(1, "Genre is required"),
  wordCount: z.string().optional(),
  
  // Step 3: Services Needed
  services: z.array(z.string()).min(1, "Select at least one service"),
  
  // Step 4: Additional Info
  message: z.string().optional(),
  consent: z.boolean().refine(v => v === true, "You must consent to be contacted"),
});

type FormData = z.infer<typeof formSchema>;

const QuoteRequest = () => {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      manuscriptStatus: "complete",
      consent: false,
    },
  });

  const selectedServices = watch("services");

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ["name", "email"];
    if (step === 2) fieldsToValidate = ["manuscriptStatus", "genre"];
    if (step === 3) fieldsToValidate = ["services"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const toggleService = (service: string) => {
    const current = selectedServices || [];
    if (current.includes(service)) {
      setValue("services", current.filter((s) => s !== service));
    } else {
      setValue("services", [...current, service]);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[2rem] p-12 text-center shadow-2xl shadow-indigo-900/10 border border-indigo-50"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-600 w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-indigo-900 mb-4">Request Received!</h1>
          <p className="text-slate-600 leading-relaxed mb-10">
            Thank you for reaching out. One of our publishing consultants will review your project and contact you within 24-48 business hours.
          </p>
          <a href="/" className="inline-block w-full">
            <Button className="w-full">Back to Home</Button>
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-indigo-900 mb-6 tracking-tight">Request a Quote.</h1>
          <p className="text-lg text-slate-600">
            Tell us about your project and we'll provide a custom production plan.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                  step >= i ? "bg-indigo-900 text-white" : "bg-white text-slate-400 border border-slate-200"
                )}
              >
                {i}
              </div>
            ))}
          </div>
          <div className="h-1.5 bg-white rounded-full overflow-hidden border border-slate-100">
            <div
              className="h-full bg-indigo-900 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-indigo-900/5 border border-indigo-50">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-8">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input
                      {...register("name")}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input
                      {...register("email")}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number (Optional)</label>
                    <input
                      {...register("phone")}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-8">Project Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-4">Manuscript Status</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: "complete", label: "Complete" },
                        { id: "in-progress", label: "In Progress" },
                        { id: "not-started", label: "Not Started" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setValue("manuscriptStatus", opt.id as any)}
                          className={cn(
                            "px-6 py-4 rounded-xl border-2 transition-all font-bold text-sm",
                            watch("manuscriptStatus") === opt.id
                              ? "border-indigo-900 bg-indigo-50 text-indigo-900"
                              : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Genre</label>
                    <input
                      {...register("genre")}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="e.g. Science Fiction, Memoir, Children's"
                    />
                    {errors.genre && <p className="text-red-500 text-xs mt-2 font-medium">{errors.genre.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Word Count (Optional)</label>
                    <input
                      {...register("wordCount")}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      placeholder="e.g. 50,000"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-8">Services Needed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Book Publishing", "Editing", "Proofreading", "Formatting",
                    "Cover Design", "ISBN", "Marketing", "Author Website",
                    "Illustrations", "Children's Publishing", "Printing",
                    "Audiobook", "Distribution"
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={cn(
                        "px-6 py-4 rounded-xl border-2 transition-all font-bold text-sm text-left flex items-center justify-between",
                        selectedServices.includes(service)
                          ? "border-indigo-900 bg-indigo-50 text-indigo-900"
                          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200"
                      )}
                    >
                      {service}
                      {selectedServices.includes(service) && <CheckCircle2 size={18} />}
                    </button>
                  ))}
                </div>
                {errors.services && <p className="text-red-500 text-xs mt-2 font-medium">{errors.services.message}</p>}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-8">Final Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Additional Comments (Optional)</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                      placeholder="Tell us more about your vision..."
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-indigo-900 focus:ring-indigo-900"
                    />
                    <label className="text-xs text-slate-500 leading-relaxed">
                      I consent to Indigo Publishers contacting me via email or phone regarding my publishing project. I understand that my data will be handled in accordance with the <a href="/privacy-policy" className="text-indigo-600 font-bold hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-xs mt-2 font-medium">{errors.consent.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
            {step > 1 ? (
              <Button type="button" variant="ghost" onClick={prevStep} className="flex items-center">
                <ArrowLeft size={18} className="mr-2" /> Back
              </Button>
            ) : (
              <div />
            )}
            
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="flex items-center">
                Next Step <ArrowRight size={18} className="ml-2" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="flex items-center">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Request <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequest;
