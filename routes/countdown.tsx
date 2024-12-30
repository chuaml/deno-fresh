import Countdown from "../islands/CountDown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <>
      <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        The big event is happening <Countdown target={date.toISOString()} />.
      </p>
    </>
  );
}
