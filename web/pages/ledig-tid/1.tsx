import { NextPage } from "next";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../../api/sanity-client";

import { Storage } from "../../api/azure-storage";
import { AzureVacant } from "../../models/azure-vacant";

import { SanityProject } from "../../models/sanity-project";
import PageLayout from "../../components/page-layout/page-layout";
import LikeButton from "../../components/like-button/like-button";

interface Props {}

const LedigTidForm: NextPage<Props> = ({}) => {
  // addVacant()
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
      <form>
        <label>
          <input placeholder="Name" type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
  );
};

// TODO: Metode for å legge laste opp input til azure tablestorage

// export async function getStaticProps() {
//     let storage = new Storage();

//     const testVacant: AzureVacant = {
//         partitionKey: "",
//         rowKey: "testbruker@mail.no",
//         name: "testbruker",
//         stilling: "Utvikler",
//         capacity: 100,
//         freeTill: new Date("2023-01-01")
//     }

//     storage.upsertVacant(testVacant)

//     return {
//         props: {
//             // vacants,
//         }
//     }
// }

// async function addVacant(){
//     let storage = new Storage();
//     let vacants = await storage.getVacants();
//     console.log("STORAGE: ", vacants)
// }

export default LedigTidForm;
