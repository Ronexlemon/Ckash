import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Terms =()=>{
    return (
        <section className={`py-32  bg-white ${sora.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <span className="flex justify-center items-start pb-10 ">
                    <h2 className="text-[#0066FF] text-2xl">Ckash Terms and Conditions</h2>
                </span>
                <div className="flex flex-col justify-start text-black gap-4">
                    <span className="text-[#0066FF]" >Effective Date: 30th March, 2025
                    </span>
                    <p>
                    Welcome to <span className="text-xl font-black text-[#0066FF]">
                c<span className="text-black">K</span>ash
              </span>, a digital self-custodial payment wallet powered by the Celo blockchain. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you") and Ckash Technologies ("Ckash", "we", "us", or "our"). By accessing or using the Ckash mobile application or services, you agree to be bound by these Terms. If you do not agree, please discontinue your use of the app immediately.

                    </p>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">1. Introduction
                        </h2>
                        <p>Ckash is a decentralized payment platform that allows users to manage and transact digital assets directly from their mobile devices. The app enables fast, secure, and transparent transactions without the need for intermediaries or custodial control. Users retain full control over their private keys and assets at all times.
                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">2. Eligibility and Access
                        </h2>
                        <p>To use the Ckash app, you must be at least eighteen (18) years old or the legal age of majority in your jurisdiction. By using the app, you affirm that you meet this requirement and that you are fully able and competent to enter into and comply with these Terms.

                        </p>
                        <p>
                        Ckash reserves the right to restrict or terminate access to users found to be in violation of these Terms, engaged in illegal activity, or presenting undue risk to the platform or other users.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">3. Self-Custody and User Responsibility
                        </h2>
                        <p>Ckash is a non-custodial wallet. This means we do not store, manage, or access your private keys or funds in any capacity. Your private keys, seed phrases, and wallet credentials are stored locally on your device. It is your responsibility to secure and back up this information. If you lose access to your recovery phrase or device, we are unable to restore your wallet or recover your digital assets.

                        </p>
                        <p>
                        You agree to use the app in compliance with all applicable laws and regulations, including anti-money laundering (AML), counter-terrorism financing (CTF), and sanctions requirements in your jurisdiction. You must not use Ckash for any unlawful, deceptive, fraudulent, or harmful purpose.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">4. Supported Digital Assets
                        </h2>
                        <p>Ckash supports assets native to and compatible with the Celo blockchain. The availability of any particular asset may change at any time and without notice. While we make reasonable efforts to support stable and reliable digital currencies, we do not guarantee the security, performance, or regulatory compliance of any asset available within the app.
                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">5. Transactions and Fees
                        </h2>
                        <p>All transactions conducted using the Ckash app are initiated by the user and executed on the Celo blockchain. Transactions may incur fees, including blockchain network fees ("gas") and, where applicable, service charges from third-party providers integrated into the app. These fees are disclosed during the transaction process and are non-refundable once the transaction is broadcast to the network.

                        </p>
                        <p>
                        Ckash does not interfere with or alter blockchain transactions and cannot reverse or cancel them once confirmed.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">6. Third-Party Services and Integrations
                        </h2>
                        <p>Ckash may offer access to third-party services within the app, such as fiat on/off-ramping, identity verification, or analytics tools. Your use of these services is voluntary and subject to their respective terms and privacy policies. We do not control these providers and are not responsible for their content, accuracy, security, or availability.


                        </p>
                        <p>
                        By engaging with third-party services, you assume all risk associated with their use and release Ckash from any liability arising from such interactions.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">7. Limitation of Liability
                        </h2>
                        <p>To the maximum extent permitted by law, Ckash shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the app. This includes but is not limited to damages resulting from loss of funds, loss of access to your wallet, unauthorized access to your account, service outages, or third-party service failures.


                        </p>
                        <p>
                        Ckash does not warrant that the app will be error-free, uninterrupted, or free from viruses or other harmful components. The app is provided "as is" and "as available" without warranties of any kind, express or implied.

                        </p>
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">8. Indemnification
                        </h2>
                        <p>You agree to indemnify and hold harmless Ckash, its founders, partners, affiliates, and employees from any claims, losses, damages, liabilities, legal fees, and expenses arising from your use of the app, your violation of these Terms, or any breach of applicable laws or third-party rights.

                       </p>
                        
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">9. Modifications and Updates
                        </h2>
                        <p>We may update these Terms at our discretion to reflect changes in the law, technology, or our services. When changes occur, we will notify you via the app or through a designated contact channel. Your continued use of the app after the effective date of the updated Terms constitutes your acceptance of those changes.

                        </p>
                        
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">10. Governing Law
                        </h2>
                        <p>These Terms shall be governed by and interpreted in accordance with the laws of PLEASE ADD COUNTRY, without regard to its conflict of laws principles. Any disputes arising from or relating to these Terms shall be resolved in the courts of [Insert Jurisdiction], unless otherwise required by applicable law.

                        </p>
                        
                    </div>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">11. Contact Information
                        </h2>
                        <p>If you have any questions, feedback, or concerns about these Terms, you can contact us at:

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
export default Terms;
