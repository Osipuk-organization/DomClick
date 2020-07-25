//
//  Registration.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct Registration: View {
    
    @State var inputTxt: String = ""
    
    @Binding var changeView: ScreensSwitching
    
    var body: some View {
        content.padding(.horizontal, 25)
    }
    
    var content: some View {
        VStack {
            Text("Регистрация")
                .font(Font.system(size: 34))
            
            TextField("Номер телефона", text: $inputTxt)
                .padding(.top, 50)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("Подтвердить")
                    .foregroundColor(.black)
            }.padding(.top, 25)
            
            Button(action: {
                self.changeView = .tab
            }) {
                Text("🍎 Зарегистрироваться с Apple")
                    .foregroundColor(.black)
            }.padding(.top, 155)
            
            Text("Регистрируясь вы соглагшаетесь с")
                .padding(.top, 25)
            Button(action: {
                
            }) {
                Text("Условиями исчпользования приложения")
            }
        } //VStack
    }
}
