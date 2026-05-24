export default function ProfileCard() {
  const profile = {
    name: "PadilXD",
    school: "SMK Telkom Malang",
    class: "XI RPL",
    address: "Malang, Indonesia",
    email: "padil@gmail.com",
    skills: ["HTML", "CSS", "NextJS"],
    hobbies: ["Ngoding", "Bermain Game", "Makan, Minum"],
    avatar: "/PadilXD.jpg",
  };

      const Item = ({ label, value }: { label: string; value: string }) => (
    <div className="flex gap-2 text-sm text-gray-300">
      <span className="font-semibold text-white">{label}</span>
      <span>{value}</span>
    </div>
  );

  return (
   <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-10 w-full max-w-xl border border-gray-700 hover:border-indigo-500 transition">
      
      <div className="flex flex-col items-center text-center">
        <img
          src={profile.avatar}
          alt="profile"
         className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500"
        />

        <h1 className="text-xl font-bold mt-4">{profile.name}</h1>
        <p className="text-gray-400 text-sm">{profile.school}</p>
      </div>

      <div className="mt-6 space-y-2">
        <Item label="Kelas:" value={profile.class} />
        <Item label="Alamat:" value={profile.address} />
        <Item label="Email:" value={profile.email} />

        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">Skill:</span>{" "}
          {profile.skills.join(", ")}
        </div>

        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">Hobi:</span>{" "}
          {profile.hobbies.join(", ")}
        </div>
      </div>
    </div>
  );
}