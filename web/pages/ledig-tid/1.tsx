import { NextPage } from "next";
import { useEffect, useState } from "react";

import LikeButton from "../../components/like-button/like-button";
import PageLayout from '../../components/page-layout/page-layout'
import VacantForm from '../../components/vacant-form/vacant-form';

interface Props {}

const LedigTidForm: NextPage<Props> = () => {
  
  const [currentLikes, setCurrentLikes] = useState([""]);
  useEffect(() => {
    setCurrentLikes(
      localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : []
    );
  }, []);
    return (
        <PageLayout title="Ledig tid">
            <h2>Meld inn ledig tid</h2>
            <VacantForm/>
            {currentLikes && currentLikes.length ? (
        <ul>
          {currentLikes.map((item: string) => (
            <li style={{ position: "relative" }} key={item}>
              {item}
              <LikeButton target={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No likes for you my friend!</p>
      )}
        </PageLayout>
    )
}

export default LedigTidForm
