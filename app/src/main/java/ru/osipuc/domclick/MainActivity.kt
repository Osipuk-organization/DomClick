package ru.osipuc.domclick

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.FirebaseAuth
import ru.osipuc.domclick.databinding.ActivityMainBinding
import ru.osipuc.domclick.ui.fragments.FirstFragment
import ru.osipuc.domclick.ui.fragments.MainFragment
import ru.osipuc.domclick.utilites.APP_ACTIVITY
import ru.osipuc.domclick.utilites.AUTH
import ru.osipuc.domclick.utilites.replaceFragment

class MainActivity : AppCompatActivity() {

    private lateinit var mBinding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mBinding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(mBinding.root)
        APP_ACTIVITY = this
        initFireBase()
        if (AUTH.currentUser != null) {
            replaceFragment(MainFragment())
        } else {
            replaceFragment(FirstFragment(), false)
        }
    }

    private fun initFireBase() {
        AUTH = FirebaseAuth.getInstance()
    }
}