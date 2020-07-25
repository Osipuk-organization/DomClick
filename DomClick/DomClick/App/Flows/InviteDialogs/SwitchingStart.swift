//
//  SwitchingStart.swift
//  DomClick
//
//  Created by Максим Сытый on 24.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

enum ScreensSwitching {
    case logReg
    case log
    case reg
    case tab
}

struct SwitchingStart: View {
    
    @State var select: ScreensSwitching = .logReg
    
    var body: some View {
        switch select {
        case .logReg:
            return LazyView(AnyView(LoginReg(changeView: self.$select)))
        case .log:
            return LazyView(AnyView(Login(changeView: self.$select)))
        case .reg:
            return LazyView(AnyView(Registration(changeView: self.$select)))
        case .tab:
            return LazyView(AnyView(TabNavigation()))
        }
    }
}

struct SwitchingStart_Previews: PreviewProvider {
    static var previews: some View {
        SwitchingStart()
    }
}
