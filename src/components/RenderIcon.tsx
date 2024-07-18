import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import themeColor from '../theme/themeColor';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconCMI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEI from 'react-native-vector-icons/EvilIcons';
import IconF from 'react-native-vector-icons/Feather';

const RenderIcon = ({ Icon, name, size = 24, color = themeColor.royalBlue }: any) => {
      if (Icon == "IconE") {
            Icon = IconE;
      } else if (Icon == "IconFA") {
            Icon = IconFA;
      } else if (Icon == "IconA") {
            Icon = IconA;
      } else if (Icon == "IconMI") {
            Icon = IconMI;
      } else if (Icon == "IconI") {
            Icon = IconI;
      } else if (Icon == "IconFA5") {
            Icon = IconFA5;
      } else if (Icon == "IconAD") {
            Icon = IconAD;
      } else if (Icon == "IconCMI") {
            Icon = IconCMI
      } else if (Icon == "IconEI") {
            Icon = IconEI;
      } else if (Icon == "IconF") {
            Icon = IconF;
      }
      return (
            <Icon name={name} size={size} color={color} />
      )
}
export default RenderIcon