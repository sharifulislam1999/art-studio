const Accordian = () => {
    return (
        <div className="flex justify-center">
            <div className="join join-vertical w-full lg:w-[60%]">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      <h1>What materials are used in your handcrafted pieces?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Our handcrafted pieces are made using a variety of high-quality materials, including but not limited to wood, metal, glass, clay, and natural fibers. Each material is carefully selected to ensure durability, beauty, and sustainability.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    <h1>How do you ensure the quality of your products?</h1>
    </div>
    <div className="collapse-content"> 
      <p>We maintain strict quality control measures at every stage of the production process. Our artisans are highly skilled and experienced, and we conduct thorough inspections to ensure that each piece meets our standards of excellence before it reaches you.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Can I request custom or personalized orders?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Yes, we welcome custom and personalized orders! Please contact us with your specific requirements, and our team will work closely with you to bring your vision to life.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>What is your shipping process and delivery times?</h1>
    </div>
    <div className="collapse-content"> 
      <p>We strive to process and ship orders as quickly as possible. Shipping times vary depending on your location and the specific product ordered. You can find estimated delivery times on our website or contact our customer service team for more information.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Do you accept returns or exchanges?</h1>
    </div>
    <div className="collapse-content"> 
      <p>Yes, we want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, please contact us within [number] days of receiving your item to arrange for a return or exchange. Please note that certain conditions may apply.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Are your artisans locally sourced or internationally sourced?</h1>
    </div>
    <div className="collapse-content"> 
      <p>We work with artisans from both local and international communities. Our goal is to support talented artisans from around the world while also promoting cultural diversity and sustainability in the crafting industry.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;