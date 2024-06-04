/**
 * Includes Title, Icon, Platform icon, arrow
 *
 * calls "description.js"
 */
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TitleCard from "./TitleCard";

const NewProject = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Grid container xs={12} spacing={5} rowSpacing={5}>
        <Grid xs />
        <Grid xs={8}>
          <TitleCard
            link="https://vtfasa.org"
            logo="pictures/vtfasaLogo.png"
            title="Fasa Website"
            dev="The club Filipino American Student Association tasked me to build a website that can serve as a hub for the active/future members of the club. The website took three months to create and was continuously updated throughout the following  school year."
            image="pictures/vtfasa.png"
            frame = {["React", "MaterialUi"]}
          />
          <TitleCard
            link="https://www.youtube.com/@kubergames3410"
            logo="pictures/KuberGamingLogo.png"
            title="Bohdied Spirits"
            dev="Bohdied Spirits is an Open RPG game made in Unity. It was a passion project  of mine that uploaded on Youtube in the form of “Devlogs” where I update viewers on the progress of the game. The game hasn’t been finished but I still learned  a vast  amount of knowledge from the development."
            image="pictures/BohdiedSpirits.png"
            frame = {["Unity"]}

          />

          <TitleCard
            link="https://bluewither.itch.io/bohdied-spirits"
            logo="pictures/KuberGamingLogo.png"
            title="Hack and Slash"
            dev="The 2D game was made during a Brackey’s GameJam in  2020. The theme was “Stronger  Together” and this was achieved through the idea of each kill making the player “stronger.” It was created in a week with the  help of one  other member on the team."
            image="pictures/HackAndSlash.png"
            frame = {["Unity"]}

          />
          <TitleCard
            link="https://bluewither.itch.io/defenders"
            logo="pictures/KuberGamingLogo.png"
            title="Defenders"
            dev="During the beginning of my Unity journey I followed a book that covered basics of unity ranging from cinemachine to Ai to spawners. This help propel me further into the framework in ways I couldn’t imagine."
            image="pictures/Defenders.png"
            frame = {["Unity"]}

          />
          <TitleCard
            link="https://bluewither.itch.io/escap"
            logo="pictures/KuberGamingLogo.png"
            title="Escaper"
            dev="This would be my first  puzzle game and was heavily focused on the puzzle aspect. This was more for my own curiosity and wanted to publish a  game under a tight deadline."
            image="pictures/Escaper.png"
            frame = {["Unity"]}

          />
          
        </Grid>
        <Grid xs />
      </Grid>
    </div>
  );
};

export default NewProject;
