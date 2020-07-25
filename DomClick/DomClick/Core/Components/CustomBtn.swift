//
//  CustomBtn.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct CustomBtn: View {
    
    private let height: CGFloat = 48.0
    
    private let text: String
    private let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Group {
                Text(text)
                    .foregroundColor(.black)
            } //Group
                .background(Color.red)
                .frame(height: height)
                .cornerRadius(height / 2)
                .padding()
        }
    }
    
    init(_ txt: String, action: @escaping @autoclosure () -> Void) {
        self.text = txt
        self.action = action
    }
}

struct CustomBtn_Previews: PreviewProvider {
    static var previews: some View {
        CustomBtn("Test btn", action: {}())
    }
}
