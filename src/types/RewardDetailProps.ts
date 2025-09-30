export type RewardDetailProps = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    value: number;
    uppercase?: boolean;
    type: 'number' | 'balance' | 'percentage';
};
