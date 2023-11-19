import {useEffect, useRef} from "react";

export function useCloseForm(handleSetEditing,oldData){
	const ref = useRef();
	useEffect(()=>{
		function handleClick(e){
			if(ref.current && !ref.current.contains(e.target) && oldData){
				handleSetEditing();
			}
		}
		document.addEventListener('click',handleClick , true);

		return ()=> document.removeEventListener("click",handleClick , true);
	},[handleSetEditing,oldData]);
	return ref;
}