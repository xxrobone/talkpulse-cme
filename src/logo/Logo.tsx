import { motion } from 'framer-motion';
import styles from './Logo.module.scss';

const pathVariants = {
  hidden: {
    pathLength: 0,
    stroke: 'transparent',
    fill: 'transparent',
    transition: {
      delay: 1,
    },
  },
  visible: {
    pathLenght: 1,
    /*  fill: '#f965160', */
    strokeWidth: 1,
    transition: {
      duration: 1,
      when: 'afterChildren',
      staggerChildren: 0.3,
      ease: 'easeInOut',
    },
    fill: ['#f96516f', '#f965165c', '#f965168d', '#F96716'],
  },
};

const Logo = () => {
  return (
    <div className={styles.logo}>
      <motion.svg
        width='86'
        height='40'
        viewBox='0 0 86 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={pathVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M83.067 28.9051C83.0677 28.8322 83.0681 28.7592 83.0681 28.6861C83.0681 12.8432 66.3784 0 45.7906 0C25.2028 0 8.51311 12.8432 8.51311 28.6861C8.51311 28.7592 8.51346 28.8322 8.51417 28.9051H6V60H86V28.9051H83.067Z'
          fill='#D9D9D9'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 2 }}
        />
        <motion.path
          d='M81.0475 30.9051L81.0671 28.8856C81.0678 28.8193 81.0681 28.7528 81.0681 28.6861C81.0681 14.4033 65.7925 2 45.7906 2C25.7887 2 10.5131 14.4033 10.5131 28.6861C10.5131 28.7527 10.5134 28.8192 10.5141 28.8857L10.5337 30.9051H8V58H84V30.9051H81.0475ZM86 28.9051V60H6V28.9051H8.51417C8.51346 28.8322 8.51311 28.7592 8.51311 28.6861C8.51311 28.6131 8.51346 28.5401 8.51417 28.4672C8.66709 12.7251 25.2977 0 45.7906 0C66.2836 0 82.9143 12.7252 83.067 28.4675C83.0677 28.5403 83.0681 28.6132 83.0681 28.6861C83.0681 28.7592 83.0677 28.8322 83.067 28.9051H86Z'
          fill='#888'
          initial={{ scale: 10, opacity: 0.3, fill: 'transparent' }}
          animate={{
            scale: 1,
            opacity: 1,
            fill: ['#8888880', '#88888847', '#888888a2', '#888'],
          }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M64.0104 17.5182H53.7488V21.8978H60.0368C60.0332 21.8252 60.0313 21.7522 60.0313 21.6788C60.0313 19.3809 61.8128 17.5182 64.0104 17.5182ZM64.0104 17.5182C66.208 17.5182 67.9895 19.3809 67.9895 21.6788C67.9895 21.7522 67.9876 21.8252 67.984 21.8978H74.6912V17.5182H64.0104Z'
          fill='transparent'
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.path
          d='M58.4121 19.5182H55.7488V19.8978H58.2873C58.325 19.7696 58.3666 19.643 58.4121 19.5182ZM53.7488 17.5182V21.8978H60.0368C60.0332 21.8252 60.0313 21.7522 60.0313 21.6788C60.0313 21.6053 60.0332 21.5323 60.0368 21.4598C60.0719 20.7512 60.2766 20.0895 60.6092 19.5182C61.3075 18.319 62.5695 17.5182 64.0104 17.5182C65.4513 17.5182 66.7133 18.319 67.4115 19.5182C67.7442 20.0895 67.9489 20.7512 67.984 21.4598C67.9876 21.5323 67.9895 21.6053 67.9895 21.6788C67.9895 21.7522 67.9876 21.8252 67.984 21.8978H74.6912V17.5182H64.0104H53.7488ZM69.6087 19.5182C69.6542 19.643 69.6958 19.7696 69.7335 19.8978H72.6912V19.5182H69.6087Z'
          fill='transparent'
          initial={{ opacity: 0, fill: 'transparent' }}
          animate={{
            opacity: 1,
            fill: '#000000',
          }}
          transition={{ delay: 2, duration: 2 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.1465 17.5182H39.0889V21.8978H18.1465V17.5182Z'
          fill='transparent'
          variants={pathVariants}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M37.0889 19.5182H20.1465V19.8978H37.0889V19.5182ZM18.1465 17.5182V21.8978H39.0889V17.5182H18.1465Z'
          fill='transparent'
          initial={{ opacity: 0, fill: 'transparent' }}
          animate={{
            opacity: 1,
            fill: '#000000',
          }}
          transition={{ delay: 2, duration: 2 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M66.733 21.8979C66.733 23.3491 65.6078 24.5256 64.2199 24.5256C62.8319 24.5256 61.7068 23.3491 61.7068 21.8979C61.7068 20.4466 62.8319 19.2701 64.2199 19.2701C65.6078 19.2701 66.733 20.4466 66.733 21.8979Z'
          fill='#D9D9D9'
          variants={pathVariants}
          transition={{ delay: 2, duration: 1 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M64.2199 23.5256C65.014 23.5256 65.733 22.8394 65.733 21.8979C65.733 20.9564 65.014 20.2701 64.2199 20.2701C63.4258 20.2701 62.7068 20.9564 62.7068 21.8979C62.7068 22.8394 63.4258 23.5256 64.2199 23.5256ZM64.2199 24.5256C65.6078 24.5256 66.733 23.3491 66.733 21.8979C66.733 20.4466 65.6078 19.2701 64.2199 19.2701C62.8319 19.2701 61.7068 20.4466 61.7068 21.8979C61.7068 23.3491 62.8319 24.5256 64.2199 24.5256Z'
          fill='#F96716'
          initial={{ scale: 10, opacity: 0.3, fill: 'transparent' }}
          animate={{
            scale: 1,
            opacity: 1,
            fill: ['#f96516f', '#f965165c', '#f965168d', '#F96716'],
          }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M40.9967 32.6075L52.8779 52.6075L60.861 44.9286H78.7768L82.0852 42.3827C82.7418 41.8774 83.6835 42.0001 84.1888 42.6566C84.694 43.3132 84.5713 44.255 83.9148 44.7602L80.2036 47.6161L80.2023 47.617C80.2023 47.617 80.2019 47.6173 79.2871 46.4286L80.2023 47.617L79.7975 47.9286H62.0697L52.231 57.3924L40.3498 37.3924L29.3964 47.9286H15.8596C15.1575 51.6299 11.9056 54.4286 8 54.4286C3.58172 54.4286 0 50.8468 0 46.4286C0 42.0103 3.58172 38.4286 8 38.4286C11.9056 38.4286 15.1575 41.2273 15.8596 44.9286H28.1877L40.9967 32.6075Z'
          stroke='#F96716'
          fill='transparent'
          initial={{ opacity: 0.1, stroke: 'transparent', pathLength: 0 }}
          animate={{
            opacity: 1,
            fill: [
              '#f96516f',
              '#f965160',
              '#f965160',
              '#f965160',
              '#f965160',
              '#F96716',
            ],
            stroke: '#F96716',
            pathLength: 1,
          }}
          transition={{ delay: 0, duration: 0.8 }}
        />
      </motion.svg>
    </div>
  );
};

export default Logo;
