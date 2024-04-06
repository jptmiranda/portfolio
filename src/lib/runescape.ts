import {
  Skill,
  WOMClient,
  type MapOf,
  type SkillValue,
} from "@wise-old-man/utils";

const client = new WOMClient();
const names = ["Hair Wanted"];

function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function mapSkills(skills: MapOf<Skill, SkillValue>) {
  const list = Object.entries(skills as object);

  list.shift();

  return list.map(([key, value]) => {
    let image = `https://oldschool.runescape.wiki/images/${capitalize(
      capitalize(key)
    )}_icon.png`;

    if (key === "runecrafting") {
      image =
        "https://oldschool.runescape.wiki/images/thumb/Runecraft_icon.png/21px-Runecraft_icon.png?c278c";
    }

    return {
      name: capitalize(key),
      image,
      level: value.level,
    };
  });
}

export async function getDetailsList() {
  return await Promise.all(
    names.map(async (name) => {
      const details = await client.players.getPlayerDetails(name);

      return {
        name: details.displayName,
        totalLevel: details.latestSnapshot!.data.skills.overall.level,
        skills: mapSkills(details.latestSnapshot!.data.skills),
      };
    })
  );
}
