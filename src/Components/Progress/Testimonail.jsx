const Testimonail = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            <div className="border p-4 rounded-md space-y-3">
               <div>
               <p>Enter a world of unparalleled craftsmanship and artistry! My purchase exceeded every expectation, showcasing an exquisite blend of skill and creativity. I enthusiastically recommend this haven to all seekers of unique, meticulously crafted treasures.</p>  
               </div>    
               <div className="flex items-center gap-3">
                <img className="w-[60px] rounded-full border-2 border-[#0A7EF5]" src="https://srivari.org/wp-content/uploads/2015/01/team-1.jpg" />
                <div>
                <h1 className="font-bold">Shariful Islam</h1>
                <p>Web Developer</p>
                </div>
                </div>                      
            </div>            
            <div className="border p-4 rounded-md space-y-3">
               <div>
               <p>Immerse yourself in the captivating narratives intricately woven into each piece, a true testament to the artisan`s mastery. A must-visit for art enthusiasts, offering an authentic journey filled with profound depth and significance.</p>  
               </div>    
               <div className="flex items-center gap-3">
                <img className="w-[60px] rounded-full border-2 border-[#0A7EF5]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dktWNTyVwR8Z27fC_MWUKluOx6tcnY5fEHjdd9O7HOlS1v_dBFwMTLwcWDdfSnc5Jx8&usqp=CAU" />
                <div>
                <h1 className="font-bold">Jhon Doe</h1>
                <p>React Developer</p>
                </div>
                </div>                      
            </div>            
            <div className="border p-4 rounded-md space-y-3">
               <div>
               <p>Embark on a discovery of artisanal excellence like no other! With flawless craftsmanship, swift delivery, and an immersive experience awaiting, this destination promises to be your timeless sanctuary for authentic artistic wonders.</p>  
               </div>    
               <div className="flex items-center gap-3">
                <img className="w-[60px] rounded-full border-2 border-[#0A7EF5]" src="https://media.licdn.com/dms/image/D5603AQEOjP3ON2knRg/profile-displayphoto-shrink_200_200/0/1677507599579?e=2147483647&v=beta&t=OZZawe61YhRyImyBrrzQgh5gLvbNKtugsTqBT6BjoQE" />
                <div>
                <h1 className="font-bold">Jhankar Mahmub</h1>
                <p>CEO Programming Hero</p>
                </div>
                </div>                      
            </div>            
                   
        </div>
    );
};

export default Testimonail;