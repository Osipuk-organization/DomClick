//
//  ListSeparatorStyle.swift
//  DomClick
//
//  Created by Максим Сытый on 24.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct ListSeparatorStyle: ViewModifier {
    
    let style: UITableViewCell.SeparatorStyle
    
    func body(content: Content) -> some View {
        content
            .onAppear() {
                UITableView.appearance().separatorStyle = self.style
            }
            .onDisappear {
                UITableView.appearance().separatorStyle = .singleLine
            }
    }
}
 
extension View {
    
    func listSeparatorStyle(style: UITableViewCell.SeparatorStyle) -> some View {
        modifier(ListSeparatorStyle(style: style))
    }
}
