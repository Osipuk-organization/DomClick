//
//  LoginReg.swift
//  DomClick
//
//  Created by Максим Сытый on 17.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct LoginReg: View {
    
    @Binding var changeView: ScreensSwitching
    
    var body: some View {
        content
    }
    
    var content: some View {
        VStack {
            Image("StartIcon")
            
            Text("Название")
                .font(Font.system(size: 34))
                .padding(.top, 96)
            
            Text("Мы помогаем подбирать недвижимость")
                .padding(.top, 10)
            
            Button(action: {
                self.changeView = .reg
            }) {
                Text("Зарегистрироваться")
                    .foregroundColor(.black)
            }.padding(.top, 59)
            
            Button(action: {
                self.changeView = .log
            }) {
                Text("Войти")
                    .foregroundColor(.black)
            }.padding(.top, 15)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("Пропустить")
                    .foregroundColor(.black)
            }.padding(.top, 56)
        } //VStack
    }
}
