import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          Welcome to Cedar Medicare
        </h1>

        <Image
          width={150}
          height={150}
          alt="cedars medicare logo"
          src={"/assets/images/cedars-logo.png"}
        />
      </main>
    </div>
  );
}
