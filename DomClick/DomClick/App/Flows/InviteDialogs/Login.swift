//
//  Login.swift
//  DomClick
//
//  Created by Максим Сытый on 24.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct Login: View {
    
    @State var inputNumb: String = ""
    @State var inputPass: String = ""
    
    @Binding var changeView: ScreensSwitching
    
    var body: some View {
        HStack {
            Spacer()
            content.padding(.horizontal, 25)
            Spacer()
        } //HStack
    }
    
    var content: some View {
        VStack {
            Text("Вход")
                .font(Font.system(size: 34))
            
            TextField("Номер телефона", text: $inputNumb)
                .padding(.top, 51)
            
            TextField("Пароль", text: $inputPass)
                .padding(.top, 35)
            
            Button(action: {
                
            }) {
                Text("Забыли пароль?")
            }.padding(.top, 14)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("Войти")
                    .foregroundColor(.black)
            }.padding(.top, 25)
            
            Text("Или войдите с Вашего аккаунта")
                .padding(.top, 30)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("🍎 Войти через аккаунт Apple")
                    .foregroundColor(.black)
            }.padding(.top, 16)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("Google Войти через аккаунт Google")
            }.padding(.top, 15)
        } //VStack
    }
}
