import { Colors, moderateScale } from '@/Theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg
    width={moderateScale(size)}
    height={moderateScale(size)}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill={color}
      d="m7.707 11.626-3.29 3.265 1.29 1.282a1 1 0 0 1-.71 1.7H1a1 1 0 0 1-1-.993v-3.97a.98.98 0 0 1 .62-.914 1.006 1.006 0 0 1 1.09.208L3 13.48l3.29-3.264a1.012 1.012 0 0 1 1.418 0 .994.994 0 0 1 0 1.41zm2.586-.001 3.29 3.265-1.29 1.28a1 1 0 0 0 .71 1.7h4a1 1 0 0 0 1-.992v-3.97a.98.98 0 0 0-.62-.913 1.006 1.006 0 0 0-1.09.208L15 13.48l-3.29-3.264a1.012 1.012 0 0 0-1.418 0 .992.992 0 0 0 0 1.41zm0-5.383 3.29-3.264-1.29-1.278a.99.99 0 0 1-.21-1.082A.987.987 0 0 1 13 0h4a1 1 0 0 1 1 .993v3.97a.98.98 0 0 1-.62.912 1.006 1.006 0 0 1-1.09-.208L15 4.387 11.712 7.65a1.012 1.012 0 0 1-1.42 0 .992.992 0 0 1 0-1.408zm-2.586 0L4.42 2.977 5.71 1.7A1 1 0 0 0 5 0H1a1 1 0 0 0-1 .993v3.97a.98.98 0 0 0 .62.913 1.006 1.006 0 0 0 1.09-.208L3 4.388 6.288 7.65a1.012 1.012 0 0 0 1.42 0 .994.994 0 0 0 0-1.41zM11.8 20.93a.818.818 0 0 1 .07-.128.714.714 0 0 0-.09.2.183.183 0 0 1 .02-.07zm.21-.317c.01-.01.02-.01.03-.02a.644.644 0 0 0-.08.09.178.178 0 0 1 .05-.07z"
    />
    <Path
      fill={color}
      d="M11.8 20.93a.818.818 0 0 1 .07-.128.714.714 0 0 0-.09.2.183.183 0 0 1 .02-.07zm.24-.337a.644.644 0 0 0-.08.09.178.178 0 0 1 .05-.07c.01-.013.02-.013.03-.02z"
    />
  </Svg>
)

export default SvgComponent