//
//  FiltersProperty.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct FiltersProperty: View {
    
    var body: some View {
        VStack {
            Text("Filters")
            
            NavigationLink(
                destination: LazyView(ListFlats())
                    .navigationBarTitle("Покупка жилья", displayMode: .inline)) {
                    Text("Подобрать")
            }
        } //VStack
    }
}

struct FiltersProperty_Previews: PreviewProvider {
    static var previews: some View {
        FiltersProperty()
    }
}
