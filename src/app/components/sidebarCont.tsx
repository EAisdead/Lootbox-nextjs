import Image from "next/image";

export default function SidebarCont() {
  return (
    <div>
      <li className="bg-green-900 rounded-xl mx-4 pt-1">
        <h1 className=" text-gray-300">Common:</h1>
        <div>
          <ul className="flex justify-center mt-2 text-sm pb-2">
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/f/f1/Icons_Wards_Basic_01.png"
                }
                alt="Ward"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Ward</p>
            </li>
            <li className="mx-4 hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a0/AegisAmulet_Relic_S9.png"
                }
                alt="Aegis"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Aegis</p>
            </li>
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/f/fa/PurificationBeads_Relic_S9.png"
                }
                alt="Beads"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Beads</p>
            </li>
          </ul>
        </div>
      </li>
      <li className="bg-green-900 rounded-xl mx-4 pt-1 mt-2">
        <h1 className=" text-blue-600">Rare:</h1>
        <div>
          <ul className="flex justify-center mt-2 text-sm pb-2">
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b5/BlinkRune_Relic_S9.png/"
                }
                alt="Blink"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Blink</p>
            </li>
            <li className="mx-4 hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/5/58/ShieldofThorns_Relic_S9.png/"
                }
                alt="Thorns"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Thorns</p>
            </li>
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/9/98/HeavenlyWings_Relic_S9.png/"
                }
                alt="Sprint"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Sprint</p>
            </li>
          </ul>
        </div>
      </li>
      <li className="bg-green-900 rounded-xl mx-4 pt-1 mt-2">
        <h1 className=" text-purple-700">Epic:</h1>
        <div>
          <ul className="flex justify-center mt-2 text-sm pb-2">
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/8/83/NPC_Conquest_Manticore.png/"
                }
                alt="Red Buff"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Red Buff</p>
            </li>
            <li className="mx-4 hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/b/bd/NPC_Conquest_Satyr.png/"
                }
                alt="Blue Buff"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Blue Buff</p>
            </li>
          </ul>
        </div>
      </li>
      <li className="bg-green-900 rounded-xl mx-4 pt-1 mt-2">
        <h1 className=" text-orange-400">Legendary:</h1>
        <div>
          <ul className="flex justify-center mt-2 text-sm pb-2">
            <li className="hover:scale-110 transition-transform duration-300 ease-linear">
              <Image
                src={
                  "https://static.wikia.nocookie.net/smite_gamepedia/images/b/bf/NPC_firegiant_y10.png/"
                }
                alt="Fire Giant"
                width={78}
                height={78}
                className="rounded-xl"
              ></Image>
              <p>Fire Giant</p>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}
