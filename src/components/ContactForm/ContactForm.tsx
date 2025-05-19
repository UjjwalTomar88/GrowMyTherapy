'use client'

import { useRef, useState } from "react";

const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
};

const ContactForm = () => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [submitted, setSubmitted] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);

    const validate = (values: typeof initialState) => {
        const newErrors: { [key: string]: string } = {};
        // only check emptiness for name & message
        if (!values.name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!values.message.trim()) {
            newErrors.message = "Please tell us what brings you here.";
        }

        // email: presence  native format
        if (!values.email) {
            newErrors.email = "Email is required.";
        } else if (!emailRef.current?.checkValidity()) {
            newErrors.email = "Invalid email address.";
        }

        // phone: presence  native pattern
        if (!values.phone) {
            newErrors.phone = "Phone is required.";
        } else if (!phoneRef.current?.checkValidity()) {
            newErrors.phone = "Phone must be 10–15 digits.";
        }

        // preferred time: only presence
        if (!values.preferredTime) {
            newErrors.preferredTime = "Preferred time is required.";
        }

        // agreement
        if (!values.agree) {
            newErrors.agree = "You must agree to be contacted.";
        }

        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;

        // Build the updated form state
        const updatedForm = {
            ...form,
            [name]: type === "checkbox" ? checked : value,
        };

        // Update the form
        setForm(updatedForm);

        // Re-run validation immediately and update errors
        setErrors(validate(updatedForm));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        setTouched(prev => ({ ...prev, [name]: true }));

        setErrors(validate(form));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(form);
        setErrors(validationErrors);

        setTouched({   // mark all as touched on submit so all errors show
            name: true, phone: true, email: true, message: true,
            preferredTime: true, agree: true
        });

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            // Here you would send the form data to your backend or email service
            setForm(initialState);
        }
    };


    // 1. Define which fields you require
    const requiredFields = ["name", "phone", "email", "message", "preferredTime", "agree"];

    // 2. Check “allTouched” and “no errors”
    const allTouched = requiredFields.every((field) => touched[field]);
    const noErrors = Object.keys(errors).length === 0;
    const isValid = allTouched && noErrors;

    const missingFieldsMsg = "Please complete all required fields";
    const errorsMsg = "Please fix the errors before submitting";
    const tooltip = !allTouched
        ? missingFieldsMsg
        : (!noErrors ? errorsMsg : "");

    return (
        <form
            className="w-full max-w-full sm:max-w-lg p-6 sm:p-8 min-w-fit bg-light bg-opacity-30 rounded-lg shadow flex flex-col gap-4 font-freight-sans-pro"
            onSubmit={handleSubmit}
            noValidate
        >
            <h3 className="text-xl font-semibold text-center font-freight-display-pro">Get In Touch</h3>
            <p className="text-sm text-muted text-center">
               {"  ---------------------   "}Fill out the form and we’ll get back to you.{"  ---------------------   "}            
            </p>
            <div>
                <label className="block mb-1 font-semibold " htmlFor="name">Name *</label>
                <input
                    className="w-full border border-primary rounded px-3 py-2 font-freight-sans-pro"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.name && errors.name ? errors.name : "\u00A0"}
                </span>
            </div>
            <div>
                <label className="block mb-1 font-semibold" htmlFor="phone">Phone *</label>
                <input
                    ref={phoneRef}
                    className="w-full border border-primary rounded px-3 py-2"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    pattern="^\d{10,15}$"
                    title="Enter 10 to 15 digits, numbers only"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.phone && errors.phone ? errors.phone : "\u00A0"}
                </span>
            </div>
            <div>
                <label className="block mb-1 font-semibold" htmlFor="email">Email *</label>
                <input
                    ref={emailRef}
                    className="w-full border border-primary rounded px-3 py-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.email && errors.email ? errors.email : "\u00A0"}
                </span>
            </div>
            <div>
                <label className="block mb-1 font-semibold" htmlFor="message">What brings you here? *</label>
                <textarea
                    className="w-full border border-primary rounded px-3 py-2"
                    id="message"
                    name="message"
                    placeholder="e.g., I'm feeling overwhelmed and would like support..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.message && errors.message ? errors.message : "\u00A0"}
                </span>
            </div>
            <div>
                <label className="block mb-1 font-semibold" htmlFor="preferredTime">Preferred time to reach you *</label>
                <input
                    className="w-full border border-primary rounded px-3 py-2"
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                    value={form.preferredTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.preferredTime && errors.preferredTime ? errors.preferredTime : "\u00A0"}
                </span>
            </div>
            <div>
                <div className="flex items-center">
                    <input
                        className="mr-2"
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    <label htmlFor="agree">I agree to be contacted *</label>
                </div>
                <span
                    className="text-red-600 text-sm block min-h-[1.25rem] break-words"
                    aria-live="polite"
                >
                    {touched.agree && errors.agree ? errors.agree : "\u00A0"}
                </span>
            </div>
            <button
                type="submit"
                title={!isValid ? tooltip : undefined}
                disabled={!isValid}
                className="bg-primary text-white rounded px-6 py-2 mt-2 hover:bg-opacity-80 transition disabled:bg-primary/50 disabled:cursor-not-allowed disabled:hover:bg-opacity-100"
            >
                Submit
            </button>
            <div className="text-green-700">
                {submitted ? ("Thank you! Your message has been sent.") : "\u00A0"}
            </div>
        </form>
    );
};

export default ContactForm;