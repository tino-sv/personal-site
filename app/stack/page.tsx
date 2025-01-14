import React from "react";
import Header from "@/components/header";

export default function StackPage() {
   return (
      <>
         <div className="flex flex-col min-h-screen p-8 max-w-2xl mx-auto">
            <Header />
            <div className="flex flex-col gap-4">
               <h2 className="text-2xl font-bold">Stack</h2>
               <p className="text-sm text-gray-500">
                  list of tech im using daily for projects
                  <br />
                  <div className="flex flex-col gap-2">
                     <div className="flex flex-col gap-2"></div>
                     <h3 className="text-lg font-bold text-green-500">
                        cursor
                     </h3>
                     <p className="text-sm text-gray-500">
                        better vscode, coding tsx feels weird in neovim lol
                     </p>
                  </div>
               </p>
               <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                     <h3 className="text-lg font-bold text-green-500">cider</h3>
                     <p className="text-sm text-gray-500">best music app</p>
                     <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                           <h3 className="text-lg font-bold text-green-500">
                              ghostty
                           </h3>
                           <p className="text-sm text-gray-500">
                              goated terminal
                           </p>
                           <div className="flex flex-col gap-4">
                              <div className="flex flex-col gap-2">
                                 <a
                                    href="https://t3.chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <h3 className="text-lg font-bold text-green-500 underline">
                                       t3 chat
                                    </h3>
                                 </a>
                                 <p className="text-sm text-gray-500">
                                    theos new chat app, fast af
                                 </p>
                                 <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                       <h3 className="text-lg font-bold text-green-500">
                                          helix
                                       </h3>
                                       <p className="text-sm text-gray-500">
                                          when im coding anything thats not js. the rust cult got me with this one.
                                       </p>
                                 <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                       <h3 className="text-lg font-bold text-green-500">
                                          test
                                       </h3>
                                       <p className="text-sm text-gray-500">
                                          coding tsx/next in helix to see my experience?
                                       </p>
                                       </div>
                                    </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
