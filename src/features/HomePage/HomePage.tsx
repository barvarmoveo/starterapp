import React, { useEffect } from "react";
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { setStarter} from './StarterSlice'
import StarterService from '../../services/StarterService'
import './HomePage.scss';



export function HomePage(props: any) {
  const dispatch = useDispatch()
  const starters = useSelector((state: RootState) => state.starter.starters);

  useEffect(() => {
    (async () => {
      const starter = await StarterService.starterFunction();
      dispatch(setStarter(starter));
    })()
  }, [])



  return (
    <main className="home-page-container flex align-center justify-center">
     Home Page
    </main>
  );
}

