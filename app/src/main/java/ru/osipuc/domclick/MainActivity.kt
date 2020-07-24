package ru.osipuc.domclick

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_main.*
import ru.osipuc.domclick.databinding.ActivityMainBinding
import ru.osipuc.domclick.ui.fragments.FirstFragment
import ru.osipuc.domclick.ui.fragments.ListFragment
import ru.osipuc.domclick.ui.fragments.ProfileFragment
import ru.osipuc.domclick.ui.fragments.SearchFragment
import ru.osipuc.domclick.utilites.APP_ACTIVITY
import ru.osipuc.domclick.utilites.AUTH
import ru.osipuc.domclick.utilites.replaceFragment

class MainActivity : AppCompatActivity() {

    private lateinit var mBinding: ActivityMainBinding
    lateinit var navBottom: BottomNavigationView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mBinding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(mBinding.root)
        APP_ACTIVITY = this
        navBottom = bottom_navigation
        navBottom.setOnNavigationItemSelectedListener {
            when (it.itemId) {
                R.id.bottom_menu_search -> {
                    replaceFragment(SearchFragment())
                    true
                }
                R.id.bottom_menu_save -> {
                    replaceFragment(ListFragment())
                    true
                }
                R.id.bottom_menu_cabinet -> {
                    replaceFragment(ProfileFragment())
                    true
                } else -> {false}
            }
        }
        initFireBase()
        replaceFragment(FirstFragment(), false)
//        if (AUTH.currentUser != null) {
//            replaceFragment(MainFragment())
//        } else {
//            replaceFragment(FirstFragment(), false)
//        }
    }

    private fun initFireBase() {
        AUTH = FirebaseAuth.getInstance()
    }
}