namespace SDK {

    class UserSignInService {
        usernameInputViewModel: UsernameInputViewModel;
        passwordInputViewModel: PasswordInputViewModel;

        usernameInputErrorViewModel: UsernameInputErrorViewModel;
        passwordInputErrorViewModel: PasswordInputErrorViewModel;

        usernameModel: UsernameModel;
        passwordModel: PasswordModel;

        userAPI: UserAPI;

        checkUsername() {
                const isTrue = usernameModel.check();
                if (isTrue) {
                    return true; 
                } else {
                    this.usernInputErrorViewModel.setMesasge('username wrong');
                    return false;
                }
            });
        }

        // TEST??????
        async signIn() {
            //  check username correct?
            const usernameValid = usernameModel.check();

            if (usernameValid) {

            } else {
                this.usernInputErrorViewModel.setMesasge('username wrong');
            }
            // check password correct?
            passwordModel.check();
            this.passwordInputErrorViewModel.setMesasge('password wrong');
            // signIn api
            return userAPI.signIn();
        }
    }
}

namespace Rect {

    class UserSignInScreen {
        // 业务逻辑层
        userSignInService

        onUsernameChanged = () => {
            const isError = userSignInServie.checkUsername();
            if (isError) {
                setState({ usernameError: true});
            }
        };

        onSignInButtonPressed = aysnc () => {
            userSignInService.checkusername() 
            // 1
            userSignInService.signIn().then(() =>{
            }).catch((error) => {
                // 捕获异常
                Alert.alert(error.message);
            });
            
            // 2
            try {
                await userSignInService.signIn();
            } catch (error) {
                // 捕获异常
            }
        };



        render() {
            // View
            //
            <View>
                <SignInButton onPress={onSignInButtonPressed} />
                <View>
                    <UsernameInput onChanged={} />
                    <Text>{userSignInService.usernameInputErrorViewModel.getContent()}</Text>
                </View>
            </View>
        }
    }

}

