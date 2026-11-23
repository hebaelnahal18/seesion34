
function Cart({name='unKnown',age=0,color='no faviorte color',children}) {
    // const {name='unKnown',age=0}=props;
  return (
    <>
      <div
        className="bg-white shadow-lg rounded-2xl p-6 
                max-w-sm mx-auto border border-pink-100 mb-4">

        <h2 className="text-2xl font-bold text-pink-600 mb-4">User Profile</h2>

        <div className="space-y-3">
          <h2 className="text-gray-700 text-lg">
            My name is:
            <span className="font-semibold text-pink-600 ml-2">
              {name}
            </span>
          </h2>

          <h2 className="text-gray-700 text-lg">
            My age is:
            <span className="font-semibold text-pink-600 ml-2">
              {age}
            </span>
          </h2>
                    <h2 className="text-gray-700 text-lg">
            My Faviorite color is:
            <span className="font-semibold text-pink-600 ml-2">
              {color}
            </span>
          </h2>
        </div>
       {children}
      </div>
    </>
  );
}

export default Cart;
