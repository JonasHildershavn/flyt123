import { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { AzureVacant } from "../../models/azure-vacant";
import { CategoryText } from "../../models/sanity-project-tags";

import { Autocomplete, RadioGroup, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import Tag from "../tag/tag";
import SaveFeedback from "../save-feedback/save-feedback";
import Subcategories from "../../assets/subcategories.json";
import LikeButton from "../like-button/like-button";
import Heading from "../heading/heading";
import Link from "next/link";

import Ghost_visible from "../../assets/ghost_visible.svg";
import Ghost_invisible from "../../assets/ghost_invisible.svg";

interface VacantFormProps {
  existingVacant: AzureVacant;
}

const VacantForm: React.FC<VacantFormProps> = ({ existingVacant }) => {
  const [showSaveFeedback, setShowSaveFeedback] = useState(false);
  const [tags, setTags] = useState([]);
  const [hiddenMsg, setHiddenMsg] = useState(
    existingVacant.showInAdmin || false
  );
  const [initPreferedProjects, setInitPreferedProjects] = useState([""]);

  function parseVacant(existingVacant: AzureVacant) {
    let vacant = JSON.parse(JSON.stringify(existingVacant));
    vacant.prefCategory = vacant.prefCategory.split(",");
    vacant.prefActivity = vacant.prefActivity.split(",");
    return vacant;
  }

  const capacitiyChoices = ["20%", "40%", "60%", "80%", "100%", "Usikker"];

  const activityChoices = Subcategories;

  useEffect(() => {
    const currentItems: Array<string> =
      sessionStorage.getItem("likes") !== null &&
      sessionStorage.getItem("likes") !== "undefined"
        ? JSON.parse(String(sessionStorage.getItem("likes")))
        : [];
    const currentItemsToAdd: Array<string> =
      sessionStorage.getItem("addLikes") !== null &&
      sessionStorage.getItem("addLikes") !== "undefined"
        ? JSON.parse(String(sessionStorage.getItem("addLikes")))
        : [];

    setInitPreferedProjects(currentItems.concat(currentItemsToAdd));
  }, []);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: parseVacant(existingVacant),
  });

  let categories = new Array();
  Object.keys(CategoryText).forEach((key) => {
    categories.push({
      en: key,
      no: CategoryText[key],
    });
  });

  function onSubmit(data: AzureVacant) {
    data.prefCategory = data.prefCategory.toString();
    data.prefActivity = data.prefActivity.toString();

    const likedProjects = sessionStorage.getItem("likes")
      ? JSON.parse(String(sessionStorage.getItem("likes")))
      : [];
    const projectsToLike = sessionStorage.getItem("addLikes")
      ? JSON.parse(String(sessionStorage.getItem("addLikes")))
      : [];
    const projectsToUnLike = sessionStorage.getItem("removeLikes")
      ? JSON.parse(String(sessionStorage.getItem("removeLikes")))
      : [];

    let finalProjects = !!projectsToLike
      ? likedProjects.concat(projectsToLike)
      : likedProjects;
    finalProjects = finalProjects.filter(
      (item: string) => !projectsToUnLike.includes(item)
    );

    sessionStorage.setItem("addLikes", JSON.stringify([]));
    sessionStorage.setItem("removeLikes", JSON.stringify([]));
    sessionStorage.setItem("likes", JSON.stringify(finalProjects));

    data.prefProject = finalProjects.toString();

    const postData = async () => {
      const url = "/api/vacant/put";
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      return response;
    };

    postData().then((response) => {
      if (response.ok) {
        setShowSaveFeedback((current) => !current);
      } else {
        console.log("RESP NOT OK", response);
      }
    });
  }

  return (
    <form className="vacant-form">
      {/* <div><TextField disabled label="Email" variant="standard" {...register("rowKey")}/>Skal fjernes, venter på AD</div>
            <div><TextField disabled label="Navn" variant="standard" {...register("name")}/>Skal fjernes, venter på AD</div> */}

      {hiddenMsg ? (
        <div className="vacant-form__hidden-mode vacant-form__hidden-mode__blue vacant-form__shared-row">
          <Ghost_invisible className="vacant-form__hidden-mode__ghost" />
          <div className="vacant-form__hidden-mode__help-text">
            <p className="vacant-form__hidden-mode__help-text__header">
              Ikke lenger ledig tid?
            </p>
            <p>
              Hvis du ikke har ledig tid og vil unngå å bli kontaktet om nye
              oppgaver kan du slå på Usynlig-modus. Informasjonen du har lagt
              inn her vil da kun være synlig for deg, og ikke prosjektledere
              eller administratorer.
            </p>
          </div>

          <div className="vacant-form__hidden-mode__header">
            <p className="vacant-form__hidden-mode__header__switch-label">
              Usynlig modus av
            </p>
            <input
              className="vacant-form__hidden-mode__header__switch"
              type="checkbox"
              defaultChecked={existingVacant.showInAdmin}
              {...register("showInAdmin")}
              onChange={() => setHiddenMsg(!hiddenMsg)}
            />
          </div>
        </div>
      ) : (
        <div className="vacant-form__hidden-mode vacant-form__hidden-mode__grey vacant-form__shared-row">
          <Ghost_visible className="vacant-form__hidden-mode__ghost" />
          <div className="vacant-form__hidden-mode__help-text">
            <p className="vacant-form__hidden-mode__help-text__header">Obs!</p>
            <p>
              Du er skjult for prosjektledere og administratorer! Om du gjør
              endringer vil de ikke se det. Skru av Usynlig-modus om du ønsker å
              bli kontaktet.
            </p>
          </div>

          <div className="vacant-form__hidden-mode__header">
            <p className="vacant-form__hidden-mode__header__switch-label">
              Usynlig modus på
            </p>
            <input
              className="vacant-form__hidden-mode__header__switch"
              type="checkbox"
              defaultChecked={existingVacant.showInAdmin}
              {...register("showInAdmin")}
              onChange={() => setHiddenMsg(!hiddenMsg)}
            />
          </div>
        </div>
      )}

      <div className="vacant-form__section vacant-form__pref-projects">
        <Heading level={2} className="vacant-form__section-title">
          Prosjekter du er interessert i:
        </Heading>
        <div className="vacant-form__pref-projects-houdini">
          <TextField variant="standard" {...register("prefProject")} />
        </div>
        {initPreferedProjects && !!initPreferedProjects.length && (
          <ul className="vacant-form__pref-projects-list">
            {initPreferedProjects.map((project, index) => (
              <div
                key={project + index}
                className="vacant-form__pref-projects-project"
              >
                <LikeButton target={project} />
                <Link
                  href={
                    "/prosjekt/" +
                    project.toLocaleLowerCase().replace(/\s/g, "-")
                  }
                >
                  <a className="vacant-form__pref-projects-project-name">
                    {project}
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        )}
      </div>

      <div className="vacant-form__section vacant-form__pref-category">
        <Heading level={2} className="vacant-form__section-title">
          Jeg vil drive med: *
        </Heading>
        <div>
          {categories.map((choice, index) => (
            <label key={choice.no + index}>
              <input
                type="checkbox"
                value={choice.no}
                aria-labelledby={choice.no}
                {...register("prefCategory", { required: true })}
              />
              <Tag
                className="vacant-form__section vacant-form__pref-category__tag"
                text={choice.no}
                category={choice.en}
              />
            </label>
          ))}
          {errors.prefCategory && errors.prefCategory.type === "required" && (
            <hr className="vacant-form__required-error" />
            // <span role="alert">This is required</span>
          )}
        </div>
      </div>

      <div className="vacant-form__section vacant-form__capacity">
        <Heading level={2} className="vacant-form__section-title">
          Jeg har ca. så mye tid i uka: *
        </Heading>
        <RadioGroup
          {...register("capacity", { required: true })}
          defaultValue={getValues().capacity}
        >
          <div>
            {capacitiyChoices.map((choice) => (
              <label
                className="vacant-form__capacity__label"
                aria-labelledby={choice}
                key={choice}
              >
                <input type="radio" value={choice} {...register("capacity")} />
                <Tag
                  className="vacant-form__capacity__tag"
                  text={choice}
                  category="other"
                />
              </label>
            ))}
          </div>
        </RadioGroup>
        {errors.capacity && errors.capacity.type === "required" && (
          <hr className="vacant-form__required-error" />
          // <span role="alert">This is required</span>
        )}
      </div>

      <div className="vacant-form__shared-row">
        <div className="vacant-form__pref-activity">
          <Heading level={2} className="vacant-form__section-title">
            Jeg digger dette:
          </Heading>
          <Autocomplete
            defaultValue={getValues().prefActivity}
            onChange={(_, value) =>
              setValue("prefActivity", value.toString().split(","))
            }
            className="vacant-form__prefActivity"
            multiple
            options={Object.keys(activityChoices)}
            freeSolo
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index) => (
                <Tag
                  className="vacant-form__pref-activity__tag"
                  key={option + index}
                  text={option}
                  category={
                    option in activityChoices
                      ? activityChoices[option as keyof typeof activityChoices]
                      : "other"
                  }
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                style={{
                  textTransform: "uppercase",
                  width: 400,
                }}
                {...params}
                variant="standard"
                value={tags || null}
              />
            )}
          />
        </div>

        <div className="vacant-form__other-info">
          <Heading level={2} className="vacant-form__section-title">
            Andre ting du vil legge til?
          </Heading>
          <TextareaAutosize
            className="vacant-form__other-info__input"
            placeholder="Jeg elsker å lage boller til møter <3"
            minRows={4}
            {...register("otherInfo")}
          />
        </div>
      </div>

      <div className="vacant-form__submit">
        <p>* Spørsmålene som er markert med stjerne må fylles ut</p>

        <button
          className="vacant-form__submit__btn"
          onClick={handleSubmit(onSubmit)}
        >
          Meld interesse
        </button>
      </div>

      {showSaveFeedback && (
        <SaveFeedback setShowSaveFeedback={setShowSaveFeedback} />
      )}
    </form>
  );
};

export default VacantForm;
