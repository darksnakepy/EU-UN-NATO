import Link from "next/link";
import "./page.sass"

export default function Home() {
  return (
    <main>
      <div className="main-content">
        <div className="textcenter">
          <h1>Europe, Nato, UN</h1>
          <p>
            Europe is a continent with diverse political systems. NATO ensures collective defense, while the UN serves as a global forum for diplomacy and peacekeeping.
          </p>
          <ul>
            <li>
              <Link href={'/about/europe'}>EUROPE</Link>
            </li>
            <li>
              <Link href={'/about/nato'}>NATO</Link>
            </li>
            <li>
              <Link href={'/about/un'}>UN</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
