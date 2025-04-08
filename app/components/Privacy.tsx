import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Privacy =()=>{
    return (
        <section className={`py-32  bg-white ${sora.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <span className="flex justify-center items-start pb-10 ">
                    <h2 className="text-[#0066FF] text-2xl">Ckash Privacy Policy</h2>
                </span>
                <div className="flex flex-col justify-start text-black gap-4">
                    <span className="text-[#0066FF]" >Effective Date: 30th March, 2025
                    </span>
                    <p>
                    This Privacy Policy describes how <span className="text-xl font-black text-[#0066FF]">
                c<span className="text-black">K</span>ash
              </span> Technologies collects, uses, and safeguards your data when you use the Ckash mobile application. We are committed to maintaining your privacy and protecting your personal information.


                    </p>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">1. Data Collection
                        </h2>
                        <p>Ckash does not require you to provide personal data to create a wallet. We do not collect your private keys, recovery phrases, or wallet balances.
                        </p>
                        <p>
                        However, when you interact with the app, we may collect limited information automatically, including your device type and model, operating system, app usage data (such as screen visits and session duration), and anonymized IP address. This data helps us improve app performance and user experience.

                        </p>
                        <p>
                        If you contact us for support or provide feedback, we may collect your email address and the content of your inquiry.
                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">2. Use of Information
                        </h2>
                        <p>We use the information we collect to operate and enhance the Ckash app. This includes diagnosing technical issues, optimizing performance, sending service-related notifications, and ensuring compliance with legal obligations.


                        </p>
                        <p>
                        We do not use your data for advertising purposes. We do not profile users or engage in cross-site tracking.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">3. Sharing of Information
                        </h2>
                        <p>We do not sell your personal data to anyone. We may share limited, anonymized information with trusted partners who help us maintain and improve our services, such as app analytics and customer support providers. These partners are obligated to handle your data in compliance with strict confidentiality and security requirements.

                        </p>
                        <p>
                        In rare cases, we may disclose your data to comply with applicable legal requirements, enforce our Terms, or protect the rights and safety of our users or the public.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">4. Data Security
                        </h2>
                        <p>We take reasonable technical and organizational measures to safeguard the data collected through the app. All sensitive data remains on your device. No one from the Ckash team has access to your wallet or keys.

                        </p>
                        <p>
                        We encourage users to apply strong device passwords, enable biometric access, and securely store recovery phrases offline.
                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">5. Data Retention
                        </h2>
                        <p>We retain anonymized app usage data for as long as necessary to analyze performance and improve features. Contact and support-related information is retained only for the duration necessary to address your inquiry and fulfill any legal obligations.


                        </p>
                        
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">6. Your Rights
                        </h2>
                        <p>Depending on your jurisdiction, you may have rights under data protection laws, such as the right to access, correct, delete, or restrict the use of your data. To exercise any of these rights, please contact us at support@ckash.app.


                        </p>
                        
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">7. Changes to This Policy
                        </h2>
                        <p>We may update this Privacy Policy from time to time to reflect new features, legal requirements, or changes in our practices. Updates will be communicated through the app or our website. Continued use of the app constitutes your acceptance of the revised policy.


                        </p>
                        
                    </div>
                    
                    
                    
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">8. Contact 
                        </h2>
                        <p>For any questions, concerns, or data requests, please reach out to:

                        </p>
                        <p className=" flex flex-col gap-2 text-black">
                            <span>   Email: support@ckash.app

                            </span>
                            <span>
                            Website: <a className="text-[#0066FF]" href="https://www.ckash.app">www.ckash.app</a>
                            </span>

                        </p>
                        
                    </div>

                </div>

            
            </div>

        </section>
    )
}
export default Privacy;
