import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../constants";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <section className="faq-section">
                <div className="faq-container">

                    <div className="faq-title">
                        <h1>
                            Frequently <br /> Asked <br /> Questions
                        </h1>

                        <div className="send-us-card">
                            <h2>Still have questions?</h2>
                            <p>
                                Can’t find the answer to your question? Send us an email and
                                we’ll get back to you as soon as possible!
                            </p>
                            <a href="mailto:info@zcoop.com" className="send-us-btn"> Send email </a>
                        </div>
                    </div>

                    <div className="question-container">
                        {faqs.map((faq, index) => (
                            <div key={index} className="question-card" onClick={() => toggleFAQ(index)}>

                                <div className="flex justify-between items-center p-4">
                                    <h3 className="text-2xl">{faq.question}</h3>
                                    <ChevronDown className={`chevron ${openIndex === index ? "rotate-180" : ""}`}/>
                                </div>
                                {openIndex === index && (
                                    <div className="question-card-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>      
            </section>
        </section>
    );
}
