
const AddCoffee = () => {
const handleAddCoffee = e =>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photoUrl = form.photoUrl.value;

  const newCoffee = {name, quantity, supplier, taste, category, details, photoUrl}
  console.log(newCoffee);

}

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="my-10 text-center font-bold text-2xl">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity  */}
        <div className="flex gap-2 my-3">
          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              Name :
              <input type="text" name="name" className="grow" placeholder="Coffee Name" />
            </label>
          </div>
          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2 ">
              Availeable Quantity :
              <input type="text" name="quantity" className="grow" placeholder="Availeable Quantity" />
            </label>
          </div>
        </div>
        {/* Supplier Taste*/}
        <div className="flex gap-2 mb-3">
          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2">
            Supplier :
              <input type="text" name="supplier" className="grow" placeholder="Supplier Name" />
            </label>
          </div>
          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2 ">
              Taste :
              <input type="text" name="taste" className="grow" placeholder="Taste" />
            </label>
          </div>
         
        </div>
        {/* form category and details*/}
        <div className="flex gap-2 mb-3">
          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2">
            Category :
              <input type="text" name="category" className="grow" placeholder="Category" />
            </label>
          </div>

          <div className="w-3/6 mx-auto">
            <label className="input input-bordered flex items-center gap-2 ">
            Details :
              <input type="text" name="details" className="grow" placeholder="Details" />
            </label>
          </div>
         
        </div>
         {/* photo url */}
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
            Photo Url :
              <input type="text" name="photoUrl" className="grow" placeholder="Photo Url" />
            </label>
          </div>
          <input type="submit" value='Add Coffee' className="btn btn-block bg-black hover:bg-black text-white my-7" />

      </form>


    </div>
  );
};

export default AddCoffee;