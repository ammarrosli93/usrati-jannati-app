import { useState } from "react";
import { Modal } from "../../ui/modal/Modal";
import { IoSearchOutline } from "react-icons/io5";

type ZoneListProps = {
  onClick: (zone: string, area: string) => void;
  onClose: () => void;
};

const states = [
  {
    state: "Johor",
    zones: [
      { zone: "JHR01", area: "Pulau Aur, Pulau Pemanggil" },
      { zone: "JHR02", area: "Johor Bahru, Kota Tinggi, Mersing" },
      { zone: "JHR03", area: "Kluang, Pontian" },
      { zone: "JHR04", area: "Batu Pahat, Muar, Segamat, Gemas Johor" },
    ],
  },
  {
    state: "Kedah",
    zones: [
      {
        zone: "KDH01",
        area: "Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil)",
      },
      { zone: "KDH02", area: "Kuala Muda, Yan, Pendang" },
      { zone: "KDH03", area: "Padang Terap, Sik" },
      { zone: "KDH04", area: "Baling" },
      { zone: "KDH05", area: "Bandar Baharu, Kulim" },
      { zone: "KDH06", area: "Langkawi" },
      { zone: "KDH07", area: "Puncak Gunung Jerai" },
    ],
  },
  {
    state: "Kelantan",
    zones: [
      {
        zone: "KTN01",
        area: "Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku",
      },
      { zone: "KTN03", area: "Gua Musang (Daerah Galas Dan Bertam), Jeli" },
    ],
  },
  {
    state: "Melaka",
    zones: [{ zone: "MLK01", area: "Melaka" }],
  },
  {
    state: "Negeri Sembilan",
    zones: [
      { zone: "NGS01", area: "Tampin, Jempol" },
      {
        zone: "NGS02",
        area: "Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban",
      },
    ],
  },
  {
    state: "Pahang",
    zones: [
      { zone: "PHG01", area: "Pulau Tioman" },
      { zone: "PHG02", area: "Kuantan, Pekan, Rompin, Muadzam Shah" },
      {
        zone: "PHG03",
        area: "Jerantut, Temerloh, Maran, Bera, Chenor, Jengka",
      },
      { zone: "PHG04", area: "Bentong, Lipis, Raub" },
      { zone: "PHG05", area: "Genting Sempah, Janda Baik, Bukit Tinggi" },
      {
        zone: "PHG06",
        area: "Cameron Highlands, Genting Higlands, Bukit Fraser",
      },
    ],
  },
  {
    state: "Perak",
    zones: [
      { zone: "PRK01", area: "Tapah, Slim River, Tanjung Malim" },
      {
        zone: "PRK02",
        area: "Kuala Kangsar, Sg. Siput (Daerah Kecil), Ipoh, Batu Gajah, Kampar",
      },
      { zone: "PRK03", area: "Lenggong, Pengkalan Hulu, Grik" },
      { zone: "PRK04", area: "Temengor, Belum" },
      {
        zone: "PRK05",
        area: "Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor",
      },
      { zone: "PRK06", area: "Selama, Taiping, Bagan Serai, Parit Buntar" },
      { zone: "PRK07", area: "Bukit Larut" },
    ],
  },
  {
    state: "Perlis",
    zones: [{ zone: "PLS01", area: "Kangar, Padang Besar, Arau" }],
  },
  {
    state: "Pulau Pinang",
    zones: [{ zone: "PNG01", area: "Pulau Pinang" }],
  },
  {
    state: "Sabah",
    zones: [
      {
        zone: "SBH01",
        area: "Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan, Sukau",
      },
      {
        zone: "SBH02",
        area: "Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat)",
      },
      {
        zone: "SBH03",
        area: "Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau (Timur)",
      },
      {
        zone: "SBH04",
        area: "Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau (Barat)",
      },
      {
        zone: "SBH05",
        area: "Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat",
      },
      { zone: "SBH06", area: "Gunung Kinabalu" },
      {
        zone: "SBH07",
        area: "Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat",
      },
      {
        zone: "SBH08",
        area: "Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pendalaman (Atas)",
      },
      {
        zone: "SBH09",
        area: "Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston, Bahagian Pendalaman (Bawah)",
      },
    ],
  },
  {
    state: "Sarawak",
    zones: [
      { zone: "SWK01", area: "Limbang, Lawas, Sundar, Trusan" },
      { zone: "SWK02", area: "Miri, Niah, Bekenu, Sibuti, Marudi" },
      { zone: "SWK03", area: "Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu" },
      {
        zone: "SWK04",
        area: "Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit",
      },
      {
        zone: "SWK05",
        area: "Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai",
      },
      {
        zone: "SWK06",
        area: "Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok",
      },
      { zone: "SWK07", area: "Serian, Simunjan, Samarahan, Sebuyau, Meludam" },
      { zone: "SWK08", area: "Kuching, Bau, Lundu, Sematan" },
      { zone: "SWK09", area: "Zon Khas (Kampung Patarikan)" },
    ],
  },
  {
    state: "Selangor",
    zones: [
      {
        zone: "SGR01",
        area: "Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, Shah Alam",
      },
      { zone: "SGR02", area: "Kuala Selangor, Sabak Bernam" },
      { zone: "SGR03", area: "Klang, Kuala Langat" },
    ],
  },
  {
    state: "Terengganu",
    zones: [
      { zone: "TRG01", area: "Kuala Terengganu, Marang, Kuala Nerus" },
      { zone: "TRG02", area: "Besut, Setiu" },
      { zone: "TRG03", area: "Hulu Terengganu" },
      { zone: "TRG04", area: "Dungun, Kemaman" },
    ],
  },
  {
    state: "Wilayah Persekutuan",
    zones: [
      { zone: "WLY01", area: "Kuala Lumpur, Putrajaya" },
      { zone: "WLY02", area: "Labuan" },
    ],
  },
];
export const ZoneList = ({ onClick }: ZoneListProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredList = states
    .map((list) => ({
      ...list,
      zones: list.zones.filter((zone) =>
        zone.area.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((list) => list.zones.length > 0);

  const prayerZoneList = filteredList.map((list) => (
    <li key={list.state} className="flex flex-col font-poppins text-xs">
      <span className="font-semibold pt-2">{list.state}</span>
      <span className="font-light italic ">
        {list.zones.map((zone) => (
          <div key={zone.zone} className="flex flex-col">
            <span className=" text-teal-800">
              {zone.area.split(", ").map((city, index) => (
                <span
                  key={`${zone.zone}-${index}`}
                  onClick={() => onClick(zone.zone, city)}
                  className="cursor-pointer hover:bg-teal-600 hover:text-yellow-200 px-1  rounded-sm transition-colors flex flex-col"
                >
                  {city}
                </span>
              ))}
            </span>
          </div>
        ))}
      </span>
    </li>
  ));
  return (
    <Modal>
      <div className="w-auto h-60 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
        <div className="flex flex-row w-full border border-teal-700  font-poppins text-xs font-light italic items-center p-1 px-2 rounded-full focus:visible">
          <IoSearchOutline size={20} />
          <input
            type="text"
            className=" p-1 px-2 text-gray-900 focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <ul>{prayerZoneList}</ul>
      </div>
    </Modal>
  );
};
