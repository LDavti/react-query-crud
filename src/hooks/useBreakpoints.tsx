import { Theme, useTheme } from '@mui/material';
import { Mixins } from '@mui/material/styles/createMixins';
import useMediaQuery from '@mui/material/useMediaQuery';

type UsedTheme = Omit<Theme, 'mixins'> & { mixins: Mixins & { [x: string]: any } };
type ActiveBreakpoints = {
  isMobile: boolean;
};

const useBreakpoints = (): ActiveBreakpoints => {
  const {
    breakpoints: { between, values: { xs, sm } },
    mixins: { mobileFirst },
  } = useTheme<UsedTheme>();

  const isMobile = useMediaQuery(between(xs, sm), { defaultMatches: !!mobileFirst });
  return {
    isMobile,
  };
};

export default useBreakpoints;
