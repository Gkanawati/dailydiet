import { StatisticCardDetail } from '@components/StatisticCardDetail';
import { StatsHeader } from '@components/StatsHeader';
import { View } from 'react-native';
import { Container, ContentContainer, StatsTitle } from './styles';

export function Stats() {
  return (
    <Container>
      <StatsHeader status='positive' />
      <ContentContainer>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <StatisticCardDetail
          value={22}
          subtitle='melhor sequencia de pratos dentro da dieta'
        />
        <StatisticCardDetail value={109} subtitle='refeições registradas' />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <StatisticCardDetail
            value={80}
            subtitle={'refeições dentro da \n dieta'}
            status='positive'
          />
          <View style={{ flex: 1 }} />
          <StatisticCardDetail
            value={10}
            subtitle={'refeições fora da \n dieta'}
            status='negative'
          />
        </View>
      </ContentContainer>
    </Container>
  );
}
