import { FlexProps } from "../../../types";
import { Flex } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex {...props} direction="column" align={align} />
    );
};
