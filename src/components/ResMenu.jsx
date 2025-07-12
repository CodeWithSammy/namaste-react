import  {useEffect} from 'react';



const ResMenu = () => {
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=9862&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
  return (
    <div className="res-menu">
      <h1>Restaurant Menu</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Sushi</li>
      </ul>
    </div>
  );
}
export default ResMenu;   
