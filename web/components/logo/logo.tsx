import Link from "next/link";

const Logo: React.FC = () => (
    <Link href="/">
        <a className="logo">
            <span className="f">F</span>
            <span className="l">L</span>
            <span className="y">Y</span>
            <span className="t">T</span>
        </a>
    </Link>
);

export default Logo;
