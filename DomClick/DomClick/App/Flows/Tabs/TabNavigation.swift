//
//  TabNavigation.swift
//  DomClick
//
//  Created by Максим Сытый on 23.07.2020.
//  Copyright © 2020 Максим Сытый. All rights reserved.
//

import SwiftUI

struct TabNavigation: View {
    var body: some View {
        NavigationView {
            TabView {
                
                StubView("Ипотека")
                    .tabItem {
                        Image(systemName: "slider.horizontal.3")
                        Text("Ипотека")
                    }
                
                FiltersProperty()
                    .tabItem {
                        Image(systemName: "magnifyingglass")
                        Text("Поиск")
                    }
                    .navigationBarTitle("", displayMode: .inline)
                
                ListFlats()
                    .tabItem {
                        Image(systemName: "heart")
                        Text("Избранное")
                    }
                    .navigationBarTitle("Test", displayMode: .inline)
                
                Cabinet()
                    .tabItem {
                        Image(systemName: "person")
                        Text("Кабинет")
                    }
                
                StubView("pencil")
                    .tabItem {
                        Image(systemName: "pencil")
                        Text("pencil")
                    }
                    .navigationBarTitle("")
                    .navigationBarHidden(true)
                
                StubView("paperplane")
                    .tabItem {
                        Image(systemName: "paperplane")
                        Text("paperplane")
                    }
                    .navigationBarTitle("")
                    .navigationBarHidden(true)
            } //TabView
        } //NavigationView
    }
}

struct TabNavigation_Previews: PreviewProvider {
    static var previews: some View {
        TabNavigation()
    }
}
