export interface IProps {
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    onClick: () => void
    isActive?: boolean
    isDisabled?: boolean
}