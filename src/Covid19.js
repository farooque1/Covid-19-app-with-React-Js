import React,{useState,useEffect} from 'react'

const Covid19 = () => {

    // const [country, setCountry] = useState("");
    // const [cases, setCases] = useState("");
    // const [recovered, setRecovered] = useState("");
    // const [deaths, setDeaths] = useState("");
    // const [todayCases, setTodayCases] = useState("");
    // const [deathCases, setDeathCases] = useState("");
    // const [recoveredCases, setRecoveredCases] = useState("");
    // const [userInput, setUserInput] = useState("");

    const [item, setitem] = useState([]);
    const [value, setvalue] = useState([]);
    const [search,setsearch]=useState("india");
    
    const getcoviddata = async () =>{
      const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
      const data =await res.json();
      console.log(data);
      setvalue(data);
    };

    useEffect(() => {
      const getcoviddata = async () =>{
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${search}`);
        const data =await res.json();
        console.log(data);
        setitem(data);
      };
      getcoviddata();
    })
    
useEffect(() => {
  getcoviddata();
}, [])

    // useEffect(() => {
    //   fetch("https://disease.sh/v3/covid-19/countries")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //     });
    // }, []);
    
    // const setData = ({
    //   country,
    //   cases,
    //   deaths,
    //   recovered,
    //   todayCases,
    //   todayDeaths,
    //   todayRecovered,
    // }) => {
    //   setCountry(country);
    //   setCases(cases);
    //   setRecovered(recovered);
    //   setDeaths(deaths);
    //   setTodayCases(todayCases);
    //   setDeathCases(todayDeaths);
    //   setRecoveredCases(todayRecovered);
    // };
    
    // const handleSearch = (e) => {
    //   setUserInput(e.target.value);
    // };
    // const handleSubmit = (props) => {
    //   props.preventDefault();
    //   fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //     });
    // };
    
    return (
        <div className="container mt-5"> 

  <h1 className="text-center mb-4">Covid-19-Tracker</h1>
  <input type="text" name="statename" className="form-control mb-3 mt-3" onChange={(e)=>{
  setsearch(e.target.value)
}} />

<table class="table table-hover table-bordered mb-5">
  <thead>
    <tr class="table-active">
     
      <th scope="col">Country Name </th>
      <th scope="col">Cases </th>
      <th scope="col">Deaths </th>
      <th scope="col">Recovered</th>
      <th scope="col">Cases Today </th>
      <th scope="col">Deaths Today </th>
      <th scope="col">Recovered Today</th>
    </tr>
  </thead>
  <tbody>
{!item ? (
  <div>
  <tr>
  <td>No data</td>
  </tr>
  </div>
  
):(
  <tr>
    <td>{search}</td>
      <td>{item.cases} </td>
      <td>{item.deaths}</td>
      <td>{item.recovered}</td>
      <td>{item.todayCases}</td>
      <td>{item.todayDeaths}</td>
      <td>{item.todayRecovered}</td>
    </tr>
)}
</tbody>
</table>


<table class="table table-hover table-bordered mb-5">
  <thead>
    <tr class="table-active">
     
      <th scope="col">Country Name </th>
      <th scope="col">Cases </th>
      <th scope="col">Deaths </th>
      <th scope="col">Recovered</th>
      <th scope="col">Cases Today </th>
      <th scope="col">Deaths Today </th>
      <th scope="col">Recovered Today</th>
    </tr>
  </thead>
  <tbody>
  {
    value.map((celement,index) => {
    return(
      
    <tr key={index}>
      <th>{celement.country} </th>
      <td>{celement.cases}</td>
      <td>{celement.deaths}</td>
      <td>{celement.recovered}</td>
      <td>{celement.todayCases}</td>
      <td>{celement.todayDeaths}</td>
      <td>{celement.todayRecovered}</td>
    </tr>
    )
    })}
  </tbody>
</table>


      {/* <div className="covidData">
        <h1>COVID-19 CASES COUNTRY WISE</h1>
        <div className="covidData__input">
          <form onSubmit={handleSubmit}>

            <input onChange={handleSearch} placeholder="Enter Country Name" />
            <br />
            <button type="submit">Search</button>
          </form>
        </div>
    
        <div className="covidData__country__info">
          <p>Country Name : {country} </p>
    
          <p>Cases : {cases}</p>
    
          <p>Deaths : {deaths}</p>
    
          <p>Recovered : {recovered}</p>
    
          <p>Cases Today : {todayCases}</p>
    
          <p>Deaths Today : {deathCases}</p>
    
          <p>Recovered Today : {recoveredCases}</p>
        </div>
      </div> */}
      </div>

);
  }
  export default Covid19;


