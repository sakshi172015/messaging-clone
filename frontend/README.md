  const user = useSelector(state => state.user)
const dispatch = useDispatch()
  const update = (e) => {
    const user =  {
      fullName: "sakshi",
      profilePic: ""
    }
    e.preventDefault();
    dispatch(updateUser(user))
  }