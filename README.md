<h1> USE EFFECT </h1>
<h3> USE CASE </h3>
<ol>
   <li> MOUNTING PHASE </li>
  <li> UPDATE PHASE  </li>
  <li> UPDATING PHASE </li>
  </ol>
  
  <h3>MOUNTING PHASE </h3>
  <p> useEffect(()=> { //call }, []) </p>
  
    <h3>UPDATING PHASE </h3>
  <p> useEffect(()=> { //call}, [stateChage , PropsChage ,UPdtae]) </p>
  
  <h3>UNMOUNTING PHASE </h3>
  <p> useEffect(
  ()=> { //call },
  return ()=>{ //call}
  [stateChage , PropsChage ,UPdtae]) </p>
