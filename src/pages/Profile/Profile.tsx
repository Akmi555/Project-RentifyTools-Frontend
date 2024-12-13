import { useAppSelector } from 'store/hooks'

import { PageWrapper, ProfileContainer } from './styles'

import UserCard from 'components/UserCard/UserCard'
import { signInOutSliceSelectors } from 'store/redux/signInSlice/signInOutSlice'

function Profile() {
  const { user, error } = useAppSelector(signInOutSliceSelectors.currentUser)

  console.log(user)
  return (
    <PageWrapper>
      {user && (
        <ProfileContainer>
          <UserCard
            userData={user}
            error={error}
            onDelete={() => {}}
            onUpdate={() => {}}
          />
        </ProfileContainer>
      )}
    </PageWrapper>
  )
}
export default Profile
