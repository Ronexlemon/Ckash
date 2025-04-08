import { Sora } from "next/font/google";


const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Account =()=>{
    return (
        <section className={`py-32  bg-white ${sora.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                <span className="flex justify-center items-start pb-10 ">
                    <h2 className="text-[#0066FF] text-2xl">How to Delete My Account on Ckash</h2>
                </span>
                <div className="flex flex-col justify-start text-black gap-4">
                   
                    <p>
                    <span className="text-xl font-black text-[#0066FF]">
                c<span className="text-black">K</span>ash
              </span> is a self-custodial wallet, which means we do not hold or control your account, wallet, or personal data. Your wallet and its private keys are stored only on your device, and you are the sole custodian of your assets and recovery phrase.

                    </p>
                    <p>
                    Because of this structure, there is no traditional account to delete on our servers, but you can take the following steps to completely stop using Ckash and remove your data from your device:

                    </p>
                    <div className="text-black flex flex-col gap-2">
                        <h2 className="text-[#0066FF]">🔐 Step-by-Step Instructions
                        </h2>
                        <div className="flex flex-col justify-start gap-4 px-16">
                            <div className="flex flex-col gap-">
                                <h3  className="text-[#0066FF]">
                                1. Transfer Your Funds:
                                </h3>
                                <p>
                                Before deleting the app, ensure you send all funds to another wallet. You will permanently lose access to them if you uninstall the app without a backup or transfer.

                                </p>

                            </div>
                            <div className="flex flex-col gap-2">
                                <h3  className="text-[#0066FF]">
                                2. Secure Your Recovery Phrase (if needed):
                                </h3>
                                <p>
                                If you plan to use the wallet again in the future, securely back up your 12/24-word recovery phrase in a private, offline location.


                                </p>

                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h3  className="text-[#0066FF]">
                                3. Delete Wallet Data on Your Device:
                                </h3>
                                <div className="flex flex-col mx-8">
  <ul className="list-none space-y-2">
    <li>Open the Ckash app.</li>
    <li>Go to <strong>Settings &gt; Security</strong> or <strong>Advanced</strong> (depending on your app version).</li>
    <li>Tap on <strong>Reset Wallet</strong> or <strong>Delete Wallet</strong>.</li>
    <li>Confirm the action. This will erase your wallet and any stored data from your device.</li>
    <li>Uninstall the Ckash app from your phone.</li>
  </ul>
</div>


                                

                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h3  className="text-[#0066FF]">
                                4. Your Data:
                                </h3>
                                <p>
                                Ckash does not store any personal information on its servers, so once your wallet is deleted from your device, no trace of your account remains within our system.


                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                                <h3  className="text-[#0066FF]">
                                Need Help?
                                </h3>
                                <p>
                                If you encounter any issues or have questions about this process, please contact our support team at <span className="text-[#0066FF]">support@ckash.app.</span>


                                </p>

                            </div>
                    
                                     
                    
                   

                </div>

            
            </div>

        </section>
    )
}
export default Account;
