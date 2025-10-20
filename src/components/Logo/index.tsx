import { ZapIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.LogoLink} href='#'>
        <ZapIcon />
        <span>Kairos</span>
      </a>
    </div>
  );
}


