import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";

const navItems = [
    {
      label: 'Starships',
      path: 'starships',
      color: '#A9C1FF'
    },
    {
      label: 'People',
      path: 'people',
      color: '#FFA9EC'
    },
    {
      label: 'Species',
      path: 'species',
      color: '#FDFFA9'
    }
];

function AuthenticatedSidebar() {
    const router = useRouter()

    const NavItem = ({ navItem }) => {

        const isCurrentRoute = router.pathname.toString().includes(`/${navItem.path}`);
        // const isCurrentRoute = router.pathname.toString() === `/${navItem.path}`;
        const classes = `
          px-2 sm:px-6 justify-center text-white sm:justify-start py-3 rounded text-base flex cursor-pointer font-semibold
          ${isCurrentRoute ? 'bg-primaryBlue' : 'hover:text-blue-500 transform hover:translate-x-1 transition ease-in-out duration-100'}
        `;

        return (
            <div onClick={() => router.replace(navItem.path)} key={navItem.label}>
                <div className={classes}>
                    <div className="flex items-center space-x-4">
                        {navItem.path === 'overview' ?
                            <Image src='/overviewSvg.svg' width='24' height='24' alt='overview' /> :
                            <span className="w-[17px] h-4 rounded-[5px]" style={{backgroundColor: navItem.color}} />
                        }
                        <span className="hidden sm:block text-white">
                            {navItem.label}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const NavItemContainer = ({ children }) => (
        <div>{children}</div>
    );

    return (
        <div className="bg-darkBlue-color h-screen px-6 flex flex-col">

            {/* Logo */}
            <div className="mt-8 flex justify-center">
                <Image src={'/logo1.svg'} width='107' height='46' alt="logo" />
            </div>

            <div className="mt-[42px]">
                <NavItemContainer>
                    <NavItem navItem={{label: 'Overview', path:'overview'}} />
                </NavItemContainer>
            </div>

            <div className="mt-[70px]">
                {navItems.map((navItem, i) => (
                    <>
                        {
                            <NavItemContainer key={i}>
                                <NavItem navItem={navItem} />
                            </NavItemContainer>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default AuthenticatedSidebar