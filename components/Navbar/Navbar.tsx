"use client";

import { motion, LayoutGroup, EventInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useScreenSize } from "../../lib/context/ScreenSizeProvider";

import styles from "./Navbar.module.scss";

import compassImage from "../../public/assets/compass.svg";

interface Page {
  name: string;
  path: string;
}

interface Props {
  page: Page;
  isSelected: boolean;
  onHoverStart: (event: MouseEvent, info: EventInfo) => void;
  onHoverEnd: (event: MouseEvent, info: EventInfo) => void;
}

const pages: Page[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Images",
    path: "/images",
  },
];

export default function Navbar() {
  const { mobile } = useScreenSize();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <p className={styles.heroText}>Sony</p>

      {!mobile && (
        <>
          <NavOptions />
          <button></button>
        </>
      )}

      {mobile && <Image src={compassImage} alt="open navigation button" />}
    </div>
  );
}

function NavOptions() {
  const router = useRouter();

  function getCurrentPage() {
    try {
      return pages.find((page) => page.path === router.asPath)?.name;
    } catch (_) {
      return pages[0].name;
    }
  }

  const [selected, setSelected] = useState(getCurrentPage());

  return (
    <LayoutGroup>
      <motion.div className={styles.navItemContainer}>
        {pages.map((page) => (
          <NavItem
            page={page}
            isSelected={selected === page.name}
            onHoverStart={() => setSelected(page.name)}
            onHoverEnd={() => setSelected(getCurrentPage())}
          />
        ))}
      </motion.div>
    </LayoutGroup>
  );
}

function NavItem({ page, isSelected, onHoverStart, onHoverEnd }: Props) {
  return (
    <Link href={page.path}>
      <motion.div className={styles.navItem} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
        <p>{page.name}</p>

        {isSelected && (
          <motion.div layoutId="hover" className={styles.navItemBackground} initial={false} transition={{ duration: 1.5, type: "spring", mass: 0.6 }}>
            <p>{page.name}</p>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
}
